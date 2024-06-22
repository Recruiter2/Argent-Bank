import "./comItem.css"

function comItem({ src, alt, title,  content="" }) {
    return (
        <div className="feature-item">
          <img src={src} alt={alt} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {content}
          </p>
        </div>
        );
    }

export default comItem;