import Image from "next/image";
import {Button} from "@/app/components/Button";
import Link from 'next/link'
import {ButtonLink} from "@/app/components/ButtonLink";


export default function Home() {
  return (
      <div className={"flex flex-col"}>
          <h1 className={"flex justify-center align-center text-3xl p-4"}>Every dog has it's day</h1>
        <div className={"flex justify-center align-center"}>
          <Image  src="/dog.jpg" loading={"eager"} alt="dog rolling on grass with it's tongue out" width={500} height={500} />
        </div>
          <div className={"flex flex-col justify-center align-center"}>
              <h2>Could it be yours?</h2><br/>
              <p>Enter your dog in for a chance to be the dog of the day. Each day two dogs will be chosen from our selection of entrants to be the best boy of the day, voted on by dog lovers everywhere.
                  <br/> Bring a smile to someone's day with the gift of your favourite pupperino. Or vote on why has stolen your heart today below. </p>
              <div className={"flex justify-center align-center"}>
                  <ButtonLink href={"./submission"} text={"Submit your dog"} />
                  <ButtonLink href={"./vote"} text={"Vote"} />
              </div>
          </div>

      </div>
  );
}
