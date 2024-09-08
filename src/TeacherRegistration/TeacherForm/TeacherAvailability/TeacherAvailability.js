import React from 'react'
import "./TeacherAvailability.scss"

const TeacherAvailability = () => {
  return (
    <div className='teacherAvailability'>
      <form>
        <h1>Set your availability</h1>
        <p>Availability shows your potential working hours. Students can book lessons at these times.</p>

        <div className="tipbox">
          <i className="ri-information-line"></i>
          <p><span>Add popular hours to get more students:</span> Most students book lessons between 19:00 and 22:00
            (popular hours). Add time slots during these hours to triple your chances of getting booked.</p>
        </div>

        <div className="monday day">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Monday</p>
          </div>
          <div className="fromto">
            <div className="from">
              <label htmlFor="">From</label>
              <select>
                <option value="">17:00</option>
              </select>
            </div>
            <div className="to">
              <label htmlFor="">To</label>
              <select>
                <option value="">21:00</option>
              </select>
            </div>
            <div className="delete">
              <i className="ri-delete-bin-6-line"></i>
            </div>
          </div>
          <h6>Add another timeslot</h6>
        </div>

        <div className="tuesday day">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Tuesday</p>
          </div>
        </div>

        <div className="wednesday day">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Wednesday</p>
          </div>
          <div className="fromto">
            <div className="from">
              <label htmlFor="">From</label>
              <select>
                <option value="">09:00</option>
              </select>
              <select>
                <option value="">18:00</option>
              </select>
            </div>
            <div className="to">
              <label htmlFor="">To</label>
              <select>
                <option value="">17:00</option>
              </select>
              <select>
                <option value="">19:00</option>
              </select>
            </div>
            <div className="delete">
              <i className="ri-delete-bin-6-line"></i>
            </div>
          </div>
          <h6>Add another timeslot</h6>
        </div>

        <div className="thursday day">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Thursday</p>
          </div>
          <div className="fromto">
            <div className="from">
              <label htmlFor="">From</label>
              <select>
                <option value="">09:00</option>
              </select>
            </div>
            <div className="to">
              <label htmlFor="">To</label>
              <select>
                <option value="">17:00</option>
              </select>
            </div>
            <div className="delete">
              <i className="ri-delete-bin-6-line"></i>
            </div>
          </div>
          <h6>Add another timeslot</h6>
        </div>

        <div className="friday day">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Friday</p>
          </div>
          <div className="fromto">
            <div className="from">
              <label htmlFor="">From</label>
              <select>
                <option value="">09:00</option>
              </select>
            </div>
            <div className="to">
              <label htmlFor="">To</label>
              <select>
                <option value="">17:00</option>
              </select>
            </div>
            <div className="delete">
              <i className="ri-delete-bin-6-line"></i>
            </div>
          </div>
          <h6>Add another timeslot</h6>
        </div>

        <div className="saturday day">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Saturday</p>
          </div>
          <div className="fromto">
            <div className="from">
              <label htmlFor="">From</label>
              <select>
                <option value="">09:00</option>
              </select>
            </div>
            <div className="to">
              <label htmlFor="">To</label>
              <select>
                <option value="">17:00</option>
              </select>
            </div>
            <div className="delete">
              <i className="ri-delete-bin-6-line"></i>
            </div>
          </div>
          <h6>Add another timeslot</h6>
        </div>

        <div className="sunday day">
          <div className="checkbox">
            <input type="checkbox" />
            <p>Sunday</p>
          </div>
          <div className="fromto">
            <div className="from">
              <label htmlFor="">From</label>
              <select>
                <option value="">09:00</option>
              </select>
            </div>
            <div className="to">
              <label htmlFor="">To</label>
              <select>
                <option value="">17:00</option>
              </select>
            </div>
            <div className="delete">
              <i className="ri-delete-bin-6-line"></i>
            </div>
          </div>
          <h6>Add another timeslot</h6>
        </div>

        <div className="btns">
          <button className="back">Back</button>
          <button className="save">Save and continue</button>
        </div>
      </form>
    </div>
  )
}

export default TeacherAvailability
