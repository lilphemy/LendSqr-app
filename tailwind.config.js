/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Main.tsx",
    "./src/App.tsx",
    "./src/components/loginimgcomp/loginview.tsx",
    "./src/components/login/loginformcomp.tsx",
    "./src/components/userdashboard/headnav.tsx",
    "./src/components/filtermodal/index.tsx",
    "./src/components/userdashboard/sidemenu.tsx",
    "./src/components/userdashboard/transactBoard.tsx",
    "./src/pages/userdashboard/userdashboard.tsx",
    "./src/components/userdetailscomp/index.tsx",
    "./src/components/userdetailscomp/userdetailbody.tsx",
    "./src/components/userdetailscomp/bodysection.tsx",
    "./src/pages/userdetails/index.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

