"use client"
 import {usePathname, useSearchParams, useRouter} from "next/navigation";
import {useCallback} from "react";

function Filter() {

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const activeFilter = searchParams.get('capacity') ?? 'all'

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, {scroll: false});
  }

  return (
    <div className="border border-primary-800 flex">

      <Button filter="all" handleFilter={handleFilter} activeFilter={activeFilter}>
        All Cabins
      </Button>
      <Button filter="small" handleFilter={handleFilter} activeFilter={activeFilter}>
        1 &mdash;3 Guest
      </Button>
      <Button filter="medium" handleFilter={handleFilter} activeFilter={activeFilter}>
        4 &mdash;7 Guest
      </Button>
      <Button filter="large" handleFilter={handleFilter} activeFilter={activeFilter}>
        8 &mdash;12 Guest
      </Button>
    </div>
  );
}

function Button({filter, handleFilter, activeFilter, children}) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter ? "bg-primary-700 text-white" : ""}`}
      onClick={() => handleFilter(filter)}>
      {children}
    </button>
    );
}

export default Filter;