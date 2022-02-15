interface Props {
    value: string | JSX.Element;
    classNames: string[];
}

function Key({ value, classNames }: Props) {
  return (
    <button type="button" className={`${classNames.join(' ')}`}>{value}</button>
  );
}

export default Key;
