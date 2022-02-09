interface Props {
    letter: string;
}

function Key({ letter }: Props) {
  return (
    <button type="button" className="key">{letter}</button>
  );
}

export default Key;
