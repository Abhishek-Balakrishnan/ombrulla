const incentives = [
  {
    name: 'Job Grading & Evaluation',
    imageSrc: 'https://static.wixstatic.com/media/3cca7a_856f4a34…o/3cca7a_856f4a342a004972a45e9beeb7d0da5c~mv2.png',
    description: "Our job evaluation and grading tool assesses and ranks job roles within an organization based on factors like responsibilities and skills, typically for compensation and organizational structuring.",
  },
  {
    name: 'Compensation Management',
    imageSrc: 'https://static.wixstatic.com/media/3cca7a_856f4a34…o/3cca7a_856f4a342a004972a45e9beeb7d0da5c~mv2.png',
    description: "Software systems used by HR departments to streamline and automate the processes related to employee compensation, including salary planning, bonuses, benefits, and overall compensation strategy management.",
  },
  // {
  //   name: 'Exchanges',
  //   imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
  //   description:
  //     "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  // },
]

export default function Example() {
  return (
    <div className="px-[10vw]">
      <div className="   px- py-24 sm:px- lg:px-">
        <div className="   h-[32rem] bg-gray-50  py-16 ">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className=" mt- grid max-w-fit grid-cols-1 gap-y-7 gap-x-3 sm:max-w-none lg:grid-cols-3">
            <div className="text-center sm:flex sm:text-left lg:block ">
                  <div className="sm:flex-shrink-0 ">
                    <div className="flow-root ml-10 font-medium	leading-4		text-sm	">
                      <h3>OUR BEST SERVICE</h3>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-9 ">
                    <h3 className="text-4xl	 font-medium leading-4 text-gray-900 ">OUR BEST SERVICE <br /><br /></h3>
                    <p className="mt-2  text-base	 text-gray-500">IT service providers work closely with clients to understand their unique needs & develop customized technology <br /><br /> <br /></p>
                    <h3 className="leading-6	font-medium">Learn More</h3>
                  </div>
                </div>
              {incentives.map((incentive) => (
                <div key={incentive.name} className="bg-[#eff1f5]	h-96 rounded-2xl	 text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0 ">
                    <div className="flow-root ">
                      <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    {/* {incentive.imageSrc} */}
                    {/* <p className="mt-2 text-sm text-gray-500"></p> */}
                  </div>
                  <div>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
