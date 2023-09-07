import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EditAppointment({appointment}){

    const {user} = useContext(UserContext);
    const history = useHistory();
  
    function handleSave(e) {
      e.preventDefault();
    //   fetch(`/artists/${user.id}/paintings/${painting.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ 
    //         title: paintingTitle,
    //         img_url: paintingImgUrl,
    //         description: paintingDescription,
    //         museum_id: paintingMuseum
    //     }),
    //   }).then((resp) => {
    //     setIsLoading(false);
    //     if (resp.ok) {
    //       resp.json().then((data) => onEditPainting(data));
    //       navigate(`/profile/${user.id}/paintings`)
    //     } else {
    //       resp.json().then((err) => alert(err.error));
    //     }
    //   });
    }

    {console.log(appointment)}

    return(
        <div>
          {user.id? 
          <div>
          {appointment.id ? 
          <div>
          <h1 className="name-container">Edit Appointment</h1>
            <form onSubmit={handleSave}>
                <button type="submit">{"Update Appointment"}</button>
            </form>
            </div> : history.push('/profile')}
            </div> :
            <div>
              <h2>Please login to edit your appointment</h2>
            </div>}
        </div>
    )
}

export default EditAppointment;