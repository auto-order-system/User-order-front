type MyInputProps = {
  placeholder?: string;
};

export default function MyInput({ placeholder }: MyInputProps) {
  return <input type="text" placeholder={placeholder} />;
}
