import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../services/userSlice';
import { RootState } from '../../store';
import Button from '../ui/Button';
import TextLink from '../ui/TextLink';

export const LogoutComponent = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();
  console.log(token);
  return (
    <div>
      {token ? (
        <>
          <Button
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <div>
          <TextLink route='/login'>Login</TextLink>
          <TextLink route='/register'>SignUp</TextLink>
        </div>
      )}
    </div>
  );
};
