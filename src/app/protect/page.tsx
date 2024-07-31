"use client";

import React from "react";

function Page() {
  return (
    <>
      <form
        action={"/api/protect"}
        method="POST"
        // onSubmit={(e) => {
        //   e.preventDefault();

        //   console.log("🚀 ~ Page ~", { key: e.target.code.value });

        //   fetch("/api/protect", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       key: e.target.code.value,
        //     }),
        //   })
        //     .then((res) => {
        //       console.log("🚀 ~ .then ~ res:", res.json());
        //     })
        //     .catch((err) => {
        //       console.error(err);
        //     });
        // }}
      >
        <input type="text" name="key" />
        <button type="submit">enter</button>
      </form>
    </>
  );
}

export default Page;
