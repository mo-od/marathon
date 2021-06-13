1   Folder Structure ที่จะใช้ในการจัดวาง  ?
	ตอบ สร้างโฟรเดอร์ components ไว้สำหรับเก็บไฟล์ ข้อมูลส่วนตัว ข้อมูลเกี่ยวกับการวิ่ง ผู้ติดต่อฉุกเฉิน ข้อมูลทางการแพทย์  เสื้อของที่ระลึก  
	https://imgur.com/Zdra31k
	

2.   Library ที่คาดว่าจะใช้สำหรับ Project นี้ พร้อมทั้งระบุด้วยว่าทำไมถึงเลือกใช้ เช่น ใช้ lodash สำหรับการจัดการข้อมูล
    ตอบ 1  .prop-types  เอาไว้เช็ค type number of format
	2. react-modal	ไว้สำหรับแสดงแจ้งเตือนในการ validate
	3.  react-number- format  ไว้สำหรับการ validate ตัวเลข
	4. react-redux	เอาไว้จัดการ state แบบ store
	5.  styled-components  ไว้สำหรับตกแต่ง css 
	6. material-ui  เรียกใช้ ui อเนกประสงค์
	

3.  จะต้องจัดการ State ของข้อมูลอย่างไร เพื่อรองรับกับโจทย์นี้ได้
	สร้างโฟรเดอร์ store ขึ้นไว้เก็บ state จากไฟล์ต่างๆใน components 
	https://imgur.com/EScihK4

4.  จะใช้วิธีใดในการ Validate Form สำหรับการ Save Draft และสำหรับการ Submit

 	ตอบ ใช้วิธีสร้างฟังค์ชั่น handleValidate แล้วนำมาแสดงเป็น modal
