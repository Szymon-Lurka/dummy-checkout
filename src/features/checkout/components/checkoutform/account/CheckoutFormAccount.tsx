import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AccountFormData } from '../../../types/form';
import FormRow from '../../../../../components/form/row/FormRow';
import Input from '../../../../../components/form/input/FormInput';
import { Button } from '../../../../../components/button/Button';
import { useCheckout } from '../../../contexts/checkout/CheckoutContext';
import { ButtonContainer } from './CheckoutFormAccount.styles.tsx';

const accountSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

interface Props {
  onSubmit: (data: AccountFormData) => void;
  defaultValues?: Partial<AccountFormData>;
  formRef: React.RefObject<HTMLFormElement>;
}

function CheckoutFormAccount({ onSubmit, defaultValues, formRef }: Props) {
  const { setAuthenticated, isAuthenticated, setDummyUserData, dummyUserData } =
    useCheckout();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues,
  });

  const handleAccountSubmit = (data: AccountFormData) => {
    if (isAuthenticated) {
      onSubmit(data);
    } else {
      // since it's really dummy app, we just set authenticated to true no matter of data
      // and we probably should have to create global context/redux for keeping info about user or whatever
      setAuthenticated(true);
      setDummyUserData(data);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(handleAccountSubmit)}>
      <FormRow label="Email address" error={errors.email?.message}>
        <Input
          id="email"
          {...register('email')}
          type="email"
          disabled={!!dummyUserData}
          autoComplete="username"
        />
      </FormRow>
      <FormRow label="Password" error={errors.password?.message}>
        <Input
          id="password"
          {...register('password')}
          type="password"
          disabled={!!dummyUserData}
          autoComplete="current-password"
        />
      </FormRow>
      {dummyUserData ? (
        <div>You're "logged in" as {dummyUserData.email}</div>
      ) : (
        <ButtonContainer>
          <Button $type="secondary" type="submit">
            Register for account
          </Button>
          <Button $type="primary" type="submit">
            Login
          </Button>
        </ButtonContainer>
      )}
    </form>
  );
}

export default CheckoutFormAccount;
