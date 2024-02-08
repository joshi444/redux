// import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Select } from "@/components/ui/select"
// import { CardContent, CardFooter, Card } from "@/components/ui/card"
 
// export default function Component() {
//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <MountainIcon className="h-6 w-6" />
//           <span className="sr-only">Acme Inc</span>
//         </Link>
//         <form className="w-full max-w-sm ml-auto flex">
//           <Input className="rounded-full" placeholder="Search for hotels" type="email" />
//           <Button className="rounded-full" type="submit">
//             <SearchIcon className="h-4 w-4" />
//             <span className="sr-only">Search</span>
//           </Button>
//         </form>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
//           <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
//             <div className="space-y-2 text-center">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                 Welcome to Paradise
//               </h1>
//               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Enter your dates to see the latest prices and deals for Paradise hotels.
//               </p>
//             </div>
//             <div className="w-full max-w-sm space-y-2">
//               <div className="flex items-center space-x-2">
//                 <Label className="text-sm" htmlFor="check-in">
//                   Check-in
//                 </Label>
//                 <Input className="rounded-md border-gray-200 border-gray-200" id="check-in" type="date" />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Label className="text-sm" htmlFor="check-out">
//                   Check-out
//                 </Label>
//                 <Input className="rounded-md border-gray-200 border-gray-200" id="check-out" type="date" />
//               </div>
//               <Select className="max-w-xs">
//                 <option>1 guest</option>
//                 <option>2 guests</option>
//                 <option>3 guests</option>
//                 <option>4 guests</option>
//                 <option>5 guests</option>
//                 <option>6 guests</option>
//                 <option>7 guests</option>
//                 <option>8 guests</option>
//                 <option>9 guests</option>
//                 <option>10 guests</option>
//               </Select>
//             </div>
//             <Button className="px-10">Search</Button>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//           <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
//             <div className="space-y-3">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Best Hotels in Paradise</h2>
//               <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                 Enter your dates to see the latest prices and deals for Paradise hotels.
//               </p>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 xl:gap-16">
//               <Card>
//                 <div className="grid aspect-[4/3] overflow-hidden rounded-t-xl">
//                   <img alt="Image" className="object-cover object-center" src="/placeholder.svg" />
//                 </div>
//                 <CardContent className="p-4">
//                   <h3 className="font-bold">Hotel Paradise</h3>
//                   <p className="text-sm text-gray-500">5 Star Hotel</p>
//                   <p className="text-sm text-gray-500">Free Cancellation</p>
//                   <p className="text-sm text-gray-500">Pay at Hotel</p>
//                   <p className="text-2xl font-bold">$200/night</p>
//                 </CardContent>
//                 <CardFooter className="flex gap-4 p-4">
//                   <Button>Book Now</Button>
//                 </CardFooter>
//               </Card>
//               <Card>
//                 <div className="grid aspect-[4/3] overflow-hidden rounded-t-xl">
//                   <img alt="Image" className="object-cover object-center" src="/placeholder.svg" />
//                 </div>
//                 <CardContent className="p-4">
//                   <h3 className="font-bold">Hotel Paradise</h3>
//                   <p className="text-sm text-gray-500">5 Star Hotel</p>
//                   <p className="text-sm text-gray-500">Free Cancellation</p>
//                   <p className="text-sm text-gray-500">Pay at Hotel</p>
//                   <p className="text-2xl font-bold">$200/night</p>
//                 </CardContent>
//                 <CardFooter className="flex gap-4 p-4">
//                   <Button>Book Now</Button>
//                 </CardFooter>
//               </Card>
//               <Card>
//                 <div className="grid aspect-[4/3] overflow-hidden rounded-t-xl">
//                   <img alt="Image" className="object-cover object-center" src="/placeholder.svg" />
//                 </div>
//                 <CardContent className="p-4">
//                   <h3 className="font-bold">Hotel Paradise</h3>
//                   <p className="text-sm text-gray-500">5 Star Hotel</p>
//                   <p className="text-sm text-gray-500">Free Cancellation</p>
//                   <p className="text-sm text-gray-500">Pay at Hotel</p>
//                   <p className="text-2xl font-bold">$200/night</p>
//                 </CardContent>
//                 <CardFooter className="flex gap-4 p-4">
//                   <Button>Book Now</Button>
//                 </CardFooter>
//               </Card>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }
 
// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
// xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }
 
 
// function SearchIcon(props) {
//   return (
//     <svg
//       {...props}
// xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   )
// }