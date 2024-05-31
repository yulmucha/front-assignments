import Header from "@/components/header";
import Image from "next/image";

interface Profile {
  imageSrc: string;
  name: string;
  age: number;
  nationality: string;
  height: number;
  weight: number;
  job: string;
  famousLines: string[];
}

export default function Assignment2() {
  // 이 아래에 ProfileCard 컴포넌트 사용에 필요한 오브젝트(데이터)를 만들어 주세요.

  return (
    <>
      <Header title={"프로필 카드 만들기"} hasBack={true} />
      <div className="w-full h-full flex flex-col overflow-y-auto py-5 px-5 gap-5">
        {/* 이 아래에 ProfileCard 컴포넌트를 사용하는 코드를 작성해 주세요. */}
        
      </div>
    </>
  );
}

function ProfileCard({
  imageSrc,
  name,
  age,
  nationality,
  height,
  weight,
  job,
  famousLines,
}: Profile) {
  return (
    <div className="p-5 bg-white border rounded-md mx-16">
      <div className="w-full flex justify-center pb-5">
        <Image
          className="rounded-full size-40"
          src={imageSrc}
          width={500}
          height={500}
          alt="profile"
        />
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <div>
          <p className="text-xs text-stone-400">이름</p>
          <div>{name}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">나이</p>
          <div>{age}세</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">국적</p>
          <div>{nationality}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">키/몸무게</p>
          <div>
            {height}cm / {weight}kg
          </div>
        </div>
        <div>
          <p className="text-xs text-stone-400">직업</p>
          <div>{job}</div>
        </div>
        <div>
          <p className="text-xs text-stone-400">명대사</p>
          {famousLines.map((line, index) => (
            <div key={`${name}FamouseLine${index}`}>&quot;{line}&quot;</div>
          ))}
        </div>
      </div>
    </div>
  );
}
