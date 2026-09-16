import "./PrimaryButton.scss";

export default function PrimaryButton({ label, onClick }: { label: string; onClick: () => void;}) {
    return (
        <div className="primary-button-container primary-button">
            <button
                type={"button"}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
}