import MagicButton from "@/app/components/magic-button";

export interface PageProps {}

export default function Page({}:PageProps) {
    return (
      <>
        <h1 className="text-xl">dashboard</h1>
        <MagicButton />
      </>
    );
}