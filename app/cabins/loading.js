import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner />
      Loading Data Cabin
    </div>
  );
}
