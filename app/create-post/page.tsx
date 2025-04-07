"use client";

import MyInput from "@/components/MyInput";
import Button from "@/components/Button";

export default function CreatePost() {
  return (
    <main>
      <h1>주문 작성</h1>
      <MyInput placeholder="메뉴를 입력하세요" />
      <Button text="제출하기" onClick={() => alert("제출 완료!")} />
    </main>
  );
}
