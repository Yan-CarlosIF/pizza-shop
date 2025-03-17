import { Link, LinkProps, useLocation } from "react-router-dom";

type NavLinkProps = LinkProps;

const NavLink = (props: NavLinkProps) => {
  const { pathname } = useLocation();

  return (
    <Link
      {...props}
      data-current={pathname === props.to}
      className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
    />
  );
};

export default NavLink;
