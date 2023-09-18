"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button, TextField } from "@/components/ui";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { routes } from "@/const";
import { cn } from "@/helpers";
import { ArrowSquareRight } from "@/icons";
import { navSignIn } from "./const";
import s from "./sign-in.module.scss";

const SignIn = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={navSignIn} />
      <div className={s.signIn}>
        <form className={s.form}>
          <h1 className={s.heading}>{t("navigation.sign-in")}</h1>
          <div className={s.formFields}>
            <TextField label={t("auth.email")} placeholder={t("auth.email")} />
            <TextField
              type="password"
              label={t("auth.password")}
              placeholder={t("auth.password")}
            />
          </div>
          <Button className={s.btn}>
            {t("navigation.sign-in")}
            <ArrowSquareRight />
          </Button>

          <div className={s.registration}>
            {t("auth.sign-in.question-for-reg")}
            &nbsp;
            <Link className={cn(s.reset, "link_active")} href={routes.auth.registration}>
              {t("navigation.registration")}
            </Link>
          </div>
          <Link
            href={routes.auth.resetPassword}
            className={cn(s.resetPassword, "link_active")}
          >
            {t("auth.sign-in.forgot-password")}
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
