import { createPortal } from 'react-dom';

const Toast = ({ copied, children }) => {
  const styles = {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 13,
    padding: 8,
    color: 'black',
    borderRadius: 4,
    backgroundColor: 'salmon',
  };
  return createPortal(
    <div>{copied && <p style={styles}>{children}</p>}</div>,
    document.querySelector('#toast'),
  );
};

export default Toast;
