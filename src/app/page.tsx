import { headers } from "next/headers";
import StatusLabel, { Status } from "./components/status-label";
import Button from "./components/button";
import AddCompanyButton from "./components/add-company-button";

export default function Home() {
 
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>

      <AddCompanyButton />
    </main>
  );
}
