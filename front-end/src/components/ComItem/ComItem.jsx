import "./comItem.css"

function comItem({ src, alt, title,  content="" }) {
    return (
        <div class="feature-item">
          <img src={src} alt={alt} class="feature-icon" />
          <h3 class="feature-item-title">{title}</h3>
          <p>
            {content}
          </p>
        </div>
        );
    }

export default comItem;