import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { RegisterRestaurant } from "@/api/register-restaurant";

const signUpForm = z.object({
  restaurantName: z.string().nonempty("O nome do restaurante é obrigatório."),
  managerName: z.string().nonempty("O nome do gerente é obrigatório."),
  email: z.string().email(),
  phone: z.string().nonempty("O telefone é obrigatório."),
});

type SignInForm = z.infer<typeof signUpForm>;

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpForm),
  });

  const { mutateAsync: registerRestaurant } = useMutation({
    mutationFn: RegisterRestaurant,
  });

  const handleSignIn = async (data: SignInForm) => {
    try {
      await registerRestaurant({
        RestaurantName: data.restaurantName,
        ManagerName: data.managerName,
        email: data.email,
        phone: data.phone,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "login",
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante.");
    }
  };

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild variant="ghost" className="absolute top-8 right-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-muted-foreground text-sm">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer"
              type="submit"
            >
              Finalizar cadastro
            </Button>

            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, voce concorda com nossos{" "}
              <a className="underline underline-offset-4" href="">
                Termos de serviço
              </a>{" "}
              e{" "}
              <a className="underline underline-offset-4" href="">
                políticas privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
