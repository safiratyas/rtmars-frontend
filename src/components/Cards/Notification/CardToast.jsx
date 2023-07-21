import React from "react";
import { Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

function CardToast({ notification }) {
  console.log(notification)
  // const dataNotif = notification.map((notif) => {
  //   return notif.jenis_kegiatan
  // })
  var jenisKegiatan = [];
  for (let i = 0; i < notification.length; i++) {
    // let message = `${notification[i].msg} ${notification[i].jenis_kegiatan} pada tanggal ${notification[i].tanggal_kegiatan}`
    jenisKegiatan.push(`${notification[i].msg} ${notification[i].jenis_kegiatan} pada tanggal ${notification[i].tanggal_kegiatan}`)
  }

  const notify = () => toast.success(
    jenisKegiatan,
    {
      duration: 6000,
    }
  );

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

export default CardToast;