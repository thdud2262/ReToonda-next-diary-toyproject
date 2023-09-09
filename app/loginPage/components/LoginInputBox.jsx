"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";

import { AuthenticationContext } from "@/app/context/AuthContext";
import useAuth from "@/hooks/useAuth";
import styles from "../loginPage.module.css";
import { CircularProgress } from "@mui/material";

export default function LoginInputBox() {
  const [loginView, setLoginView] = useState(true);
  const { error, loading, data, setAuthState } = useContext(
    AuthenticationContext
  );

  const { login } = useAuth();

  const [loginInputs, setLoginInputs] = useState({
    userid: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleClickLogin = async () => {
    if (loginInputs.userid == "" || loginInputs.password == "") {
      alert("빈칸을 채워주세요");
    }
    await login({
      userid: loginInputs.userid,
      password: loginInputs.password,
    });
    setLoginInputs({ userid: "", password: "" });
  };

  return (
    <div>
      <div className={styles.inputBox}>
        {!loginView && (
          <input
            name="email"
            type="email"
            value={loginInputs.email}
            onChange={handleChangeInput}
            className={styles.inputItem}
            placeholder="이메일을 입력하세요"
          />
        )}
        <input
          name="userid"
          type="text"
          value={loginInputs.userid}
          onChange={handleChangeInput}
          className={styles.inputItem}
          placeholder="4-15자 이내의 아이디를 입력하세요"
        />
        <input
          name="password"
          type="password"
          value={loginInputs.password}
          onChange={handleChangeInput}
          className={styles.inputItem}
          placeholder="6-20자 이내의 비밀번호를 입력하세요"
        />
        <div className={styles.loadingSpinnerBox}>
          {loading && <CircularProgress color="success" />}
        </div>
        <p className={styles.errorMessage}>
          {data?.errorMessage && data.errorMessage}
        </p>
      </div>
      <div className={styles.buttonBox}>
        <button onClick={handleClickLogin}>로그인</button>
        <Link href={"/signupPage"}>회원가입 하러 가기</Link>
      </div>
    </div>
  );
}
