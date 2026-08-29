export default function Logo() {
  return (
    <div className="flex flex-col items-center mb-4">
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32 24C32 24 33 17 40 17C40 21 37 24 34 24.5C38 25 42 28 42 34C42 42 36 48 32 48C28 48 22 42 22 34C22 28 26 25 30 24.5C27 24 24 21 24 17C31 17 32 24 32 24Z"
          fill="#2e5339"
        />
        <path
          d="M32 22C32 22 30 15 24 14C24 18 27 22 32 22Z"
          fill="#5a7a5a"
        />
      </svg>
      <p className="text-[#2e5339] font-semibold text-sm mt-1 tracking-wide">
        Apple A Day
      </p>
    </div>
  );
}