
import '../css/Playing.css';
const Playing = () => {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='span spanBorder col-md-4'></div>
                <div className='span spanBorder col-md-4'></div>
                <div className='span col-md-4'></div>
            </div>
            <div className='row'>
                <span className='span spanBorder col-md-4' type='text'></span>
                <span className='span spanBorder col-md-4'></span>
                <span className='span spanBorder1 col-md-4'></span>
            </div>
            <div className='row'>
                <div className='span col-md-4'></div>
                <div className='span spanBorder2 col-md-4'></div>
                <div className='span col-md-4'></div>
            </div>
        </div>
    );
};
export default Playing;