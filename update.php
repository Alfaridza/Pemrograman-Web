<?php
// include database connection file
require 'information.php';

$id = $_GET['id'];

if(isset($_POST["submit"])) {
    if( isset($_POST["submit"])){
        //jika sudah ditekan dijalankan function tambah
        if(update($id) > 0) {
            echo "
                <script>
                    alert('data berhasil diupdate/ubah!');
                    document.location.href = 'index.php';
                </script>
            ";
        } else {
            echo "
                <script>
                    alert('data gagal ditambahkan!');
                    document.location.href = 'index.php';
                </script>
            ";
        }
    }
}

?>




<html>
<head>	
    <title>Edit User Data</title>
</head>
 
<body>
    <a href="index.php">Home</a>
    <br/><br/>
    
    <form  method="post" action="">
    <ul>
            <li>
                <label for="id">ID</label>
                <input type="text" name="id" id="id">
            </li>
            <li>
                <label for="nama">Nama</label>
                <input type="text" name="name" id="nama">
            </li>
            <li>
                <label for="email">Email</label>
                <input type="text" name="email" id="email">
            </li>
            <li>
                <label for="address">Address</label>
                <input type="text" name="address" id="address">
            </li>
            <li>
                <label for="gender">Gender</label>
                <input type="radio" name="gender" id= "gender" value="laki-laki">Laki-Laki 
                <input type="radio" name="gender" value="perempuan">Perempuan
                
            </li>
            <li>
                <label for="position">Posisi</label>
                <input type="text" name="position" id="position">
            </li>
            <li>
                <label for="status">status</label>
                <input type="radio" name="status" value="parttime">Parttime <input type="radio"
                name="status" value="fulltime">Fulltime
            </li>

            </ul>
                <input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
                <input type="submit" name="update" value="Update"></td>
        </ul>
    </form>
</body>
</html>