import PropTypes from 'prop-types';
import { useState } from 'react';

function SiteInfo({ onSiteInfoReceived }) {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = () => {
        // サイト情報をバックエンドに送信
        fetch('/api/sites/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, url }),
        })
        .then(response => response.json())
        .then(data => {
            onSiteInfoReceived(data);
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Site Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            <input
                type="text"
                placeholder="Site URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
                />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

// propsの型を検証
SiteInfo.propTypes = {
    onSiteInfoReceived: PropTypes.func.isRequired,
};
export default SiteInfo;
