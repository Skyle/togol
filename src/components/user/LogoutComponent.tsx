import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

export const LogoutComponent = () => {
  const token = useSelector((state: RootState) => state.user.token);
  console.log(token);
  return (
    <div>
      {token ? (
        <>
          <div>Logout</div>
        </>
      ) : (
        <>
          <p>nicht eingeloggt</p>
        </>
      )}
    </div>
  );
};
