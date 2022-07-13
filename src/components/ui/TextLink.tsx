import { Link } from 'react-router-dom';

interface TextlinkProps {
  children: React.ReactNode;
  route: string;
}

function TextLink({ children, route }: TextlinkProps) {
  return (
    <Link
      className='text-center mx-2 font-medium hover:text-red-900'
      to={route}
    >
      {children}
    </Link>
  );
}

export default TextLink;
