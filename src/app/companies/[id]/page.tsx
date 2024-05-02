import Header from '../../components/header';

export interface PageProps {
  params: {id:string};
}

export function generateStaticParams() {
  return [{}]
}

export default function Page({params}:PageProps) {
  return (
    <>
      <Header>Companies {params.id}</Header>
    </>
  );
}
