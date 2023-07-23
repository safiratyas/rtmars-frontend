import React from "react";
import { Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

function CardNotification({ notification }) {
  console.log(notification)
  var jenisKegiatan = [];
  for (let i = 0; i < notification.length; i++) {
    jenisKegiatan.push(`${notification[i].msg} ${notification[i].jenis} pada tanggal ${notification[i].tanggal}\n\n`)
  }

  console.log(jenisKegiatan)

  const notify = () => toast((t) => (
    <span className="text-center">
      {jenisKegiatan}
      <button className="nav-toast"
        onClick={() => toast.dismiss(t.id)}
        style={{ backgroundColor: '#002B5B', color: 'white', borderColor: '#002B5B', borderRadius: '10px' }}>
        Close
      </button>
    </span>
  ));

  return (
    <>
      <div>
        <Button className="nav-signup" style={{ marginLeft: '10px' }} onClick={notify}>Notification</Button>
        <Toaster position="top-center"
          reverseOrder={false}
        />
        {/* {notification && notification.map((notif) => {
          return (
            <>
              <Toaster position="top-right"
                reverseOrder={false}
              />
              <Button>{notif}</Button>
            </>
          )
        })} */}
      </div>
    </>
  );
}

export default CardNotification;