import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  return (
    <>
      <p>404 Not Found</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFound;
