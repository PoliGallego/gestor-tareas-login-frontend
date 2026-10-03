import './assets/css/Info.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

type InfoProps = {
  text: string;
  onClose: () => void;
};

function Info({ text, onClose }: InfoProps) {

    return <div className="info-body">
        <div className="info-container">
            <div className="info-div">
                <div className='info-title'>
                    <i className="fa-solid fa-circle-info"></i>
                    <h1>Information</h1>
                </div>
                <p>{text || "Hello world!"}</p>
                <input type="submit" value={"Agreed"} onClick={onClose} />
            </div>
        </div>
    </div>
}

export default Info;