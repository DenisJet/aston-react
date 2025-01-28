import { Link, useNavigate } from "react-router";
import { useAppDispatch } from "../../store/store";
import { FormEvent, useEffect } from "react";
import { login, userActions } from "../../store/user/user.slice";
import { ROUTES } from "../../constants/routes.constants";
import {
  useSelectJwt,
  useSelectLoginErrorMessage,
} from "../../store/user/user.selectors";

export type SigninForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

export default function SigninForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const jwt = useSelectJwt();
  const loginErrorMessage = useSelectLoginErrorMessage();

  useEffect(() => {
    if (jwt) {
      navigate(ROUTES.home);
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    dispatch(userActions.clearRegisterError());
    const target = e.target as typeof e.target & SigninForm;
    const { email, password } = target;
    dispatch(
      login({
        email: email.value,
        password: password.value,
      }),
    );
  };

  return (
    <div className="flex flex-col gap-4 p-3 justify-center items-center">
      <h1 className="text-2xl font-semibold text-center">Вход</h1>
      {loginErrorMessage && <p className="text-red-500">{loginErrorMessage}</p>}
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
          Войти
        </button>
      </form>
      <div className="flex gap-2">
        <div>Нет аккаунта?</div>
        <Link className="link link-primary" to={ROUTES.signup}>
          Регистрация
        </Link>
      </div>
    </div>
  );
}
