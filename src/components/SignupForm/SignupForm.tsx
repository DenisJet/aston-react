import { Link, useNavigate } from "react-router";
import { useAppDispatch } from "../../store/store";
import { FormEvent, useEffect } from "react";
import { register, userActions } from "../../store/user/user.slice";
import { ROUTES } from "../../constants/routes.constants";
import {
  useSelectJwt,
  useSelectRegisterErrorMessage,
} from "../../store/user/user.selectors";

export type SignupForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export default function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const jwt = useSelectJwt();
  const registerErrorMessage = useSelectRegisterErrorMessage();

  useEffect(() => {
    if (jwt) {
      navigate(ROUTES.home);
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    dispatch(userActions.clearRegisterError());
    const target = e.target as typeof e.target & SignupForm;
    const { email, password } = target;
    dispatch(
      register({
        email: email.value,
        password: password.value,
      }),
    );
  };

  return (
    <div className="flex flex-col gap-4 p-3 justify-center items-center">
      <h1 className="text-2xl font-semibold text-center">Регистрация</h1>
      {registerErrorMessage && (
        <p className="text-red-500">{registerErrorMessage}</p>
      )}
      <p className="text-center">
        Добро пожаловать! Пожалуйста, введите Ваш email и пароль.
      </p>
      <form className="flex flex-col gap-4" onSubmit={submit}>
        <div className="flex flex-col">
          <label htmlFor="email">Ваш email</label>
          <input
            className="input input-primary"
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Ваш пароль</label>
          <input
            className="input input-primary"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>
      <div className="flex gap-2">
        <div>Есть аккаунт?</div>
        <Link className="link link-primary" to={ROUTES.signin}>
          Войти
        </Link>
      </div>
    </div>
  );
}
