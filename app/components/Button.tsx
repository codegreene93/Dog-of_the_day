
interface ButtonProps {
    backgroundColor: string;
    fontColor: string;
    size: string;
    onClick: () => void;
}
export const Button = ({backgroundColor,fontColor, size, onClick }: ButtonProps) => <button>Click me</button>