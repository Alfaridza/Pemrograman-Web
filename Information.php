<?php
        //koneksi ke database
        $conn = mysqli_connect("localhost", "praktikum11", "", "praktikum_11");

        //fungsi untuk mengambil data dari database
        function query($query){
            global $conn;
            $data = mysqli_query($conn, $query);
            $karyawan1 = [];
            while( $karyawan = mysqli_fetch_assoc($data) ) {
                $karyawan1[] = $karyawan;
            }
            return $karyawan1;
        }

        function tambah($data){
            global $conn;

            
            $nama = $data["name"];
            $email = $data["email"];
            $address = $data["address"];
            $gender = $data["gender"];
            $position = $data["position"];
            $status = $data["status"];

            $query = "INSERT INTO karyawan
                    VALUES
                    (0, '$nama', '$email', '$address','$gender','$position','$status')
                ";
            //menggunakan query untuk menambah data yaitu memerlukan parameter penghubung database dan query sql
            mysqli_query($conn, $query);
            //mengembalikan jumlah pada database,
            //contoh: jika id = 3 terdapat pada database maka akan mereturn nilai 1, jika tidak ada maka return 0
            return mysqli_affected_rows($conn);
        }

        function hapus($id){
            global $conn;
            mysqli_query($conn, "DELETE FROM karyawan WHERE id = $id");
            //mengembalikan jumlah pada database,
            //contoh: jika id = 3 terdapat pada database maka akan mereturn nilai 1, jika tidak ada maka return 0
            return mysqli_affected_rows($conn);
        }

        function update($id){
            global $conn;

            $id = $_POST['id'];
    
            $nama = $_POST["name"];
            $email = $_POST["email"];
            $address = $_POST["address"];
            $gender = $_POST["gender"];
            $position = $_POST["position"];
            $status = $_POST["status"];

            $result = mysqli_query
            ($mysqli, "UPDATE karyawan SET name='$nama',
            email='$email',gender='$gender',
            position='$position','$status' WHERE id=$id");

            if(mysqli_query($conn, $result)){
                echo "Records were updated successfully.";
             } else {
                echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
            }
                        return mysqli_affected_rows($conn);
                    }
?>