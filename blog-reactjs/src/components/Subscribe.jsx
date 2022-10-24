

const Subscribe = () => {
  return (
    <div className="p-3 border-y border-b-white-100 border-b-solid w-full mx-auto mt-10 flex flex-col gap-4">
        <p className="text-center">Subscribe to my newsletter and never miss my upcoming articles</p>
        <div className="flex mt-2 gap-2 justify-center">
            <input className="w-[50%]" placeholder="Email Address" />
            <button className="p-2 hover:bg-orange-200 bg-lime-400 rounded-lg text-black">Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe