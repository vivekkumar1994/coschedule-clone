import React from 'react'
import "./calendar.css"

const Calendar = () => {
  return (
    <>
    <div className="top">
    <div className="left">
        <div onclick="window.location.href=''"><i class="fas fa-bars"></i></div>
        <div onclick="window.location.href=''"><i class="far fa-calendar-check"></i></div>
        <div onclick="window.location.href=''"><h2>Calender / All</h2></div>
        <div onclick="window.location.href=''"><i class="fas fa-chevron-circle-down"></i></div>
        <div onclick="window.location.href=''"><i class="fas fa-filter"></i></div>
        <div onclick="window.location.href=''"><i class="fas fa-desktop"></i></div>
        <div onclick="window.location.href=''"><i class="fas fa-share-square"></i></div>
        <div onclick="window.location.href=''"><i class="fas fa-ellipsis-v"></i></div>
    </div>

    <div class="right">
        <div onclick="window.location.href=''"><i class="fas fa-trophy"></i></div>
        <div onclick="window.location.href=''"><i class="fas fa-question"></i></div>
        <div onclick="window.location.href=''"><i class="fas fa-bell"></i></div>
    </div>
</div>







<div id="nav">
    <div onclick="window.location.href=''"><i class="fas fa-angle-left"></i> JAN 1 - JAN 31 , 2022 <i class="fas fa-angle-right"></i></div>
    <div onclick="window.location.href=''">Today</div>
    <div onclick="window.location.href=''"><i class="fas fa-search"></i></div>
    <div onclick="window.location.href=''"><i class="far fa-plus-square"></i> Create </div>
    <div onclick="window.location.href=''"><i class="far fa-lightbulb"></i> Ideas <i class="fas fa-angle-right"></i></div>
   
</div>
<div class="cal">
    <div className="day">MONDAY</div>
    <div className="day">TUESDAY</div>
    <div className="day">WEDNESDAY</div>
    <div className="day">THURSDAY</div>
    <div className="day">FRIDAY</div>
    <div className="day">SATURDAY</div>
    <div className="day">SUNDAY</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
    <div>17</div>
    <div>18</div>
    <div>19</div>
    <div>20</div>
    <div>21</div>
    <div>22</div>
    <div>23</div>
    <div>24</div>
    <div>25</div>
    <div>26</div>
    <div>27</div>
    <div>28</div>
    <div>29</div>
    <div>30</div>
    <div>31</div>
   
</div>
</>
  )
}

export default Calendar
