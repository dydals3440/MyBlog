type Props = {
  categories: string[];
  selected: string;
  // string 타입의 카테고리를 인자로 전달하면 아무런 것도 반환해 주지 않는 함수
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='text-center p-4'>
      <h2 className='text-lg font-bold border-b border-sky-500 mb-2'>
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && 'text-sky-600'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
