import React from "react";

function FirebaseLoginBtn({ img, loginFn }) {
  return (
    <button
      onClick={loginFn}
      className="bg-white border border-zinc-600 px-4 lg:px-7 py-1.5 rounded-xl 
            flex items-center justify-center gap-2 text-zinc-800 active:translate-y-[1px] hover:bg-[#ffffffab] shadow-md"
    >
      <span>
        <img src={img} alt="Google logo" height="20" width="20" className="w-7" />
      </span>
      <span className="font-medium">Sign in with Google</span>
    </button>
  );
}

export default FirebaseLoginBtn;
