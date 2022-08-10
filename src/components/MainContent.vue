<template>
<div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">CUSTOMER</th>
                <th scope="col">PHONE</th>
                <th scope="col">WEBSITE</th>
                <th scope="col">COMPANY NAME</th>
                <th scope="col">STATUS</th>
                <th scope="col">ACTION</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>10</td>
                <td>Glenna Reichert</td>
                <td>(775)976-6794 x41206</td>
                <td>conrad.com</td>
                <td>Yost and Sons</td>
                <td><button type="button" class="danger">DANGER</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>9</td>
                <td>Clementina DuBuque</td>
                <td>024-648-3804</td>
                <td>ambrose.net</td>
                <td>Hoeger LLC</td>
                <td><button type="button" class="pending">PENDING</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Leanne Grahan</td>
                <td>1-770-736-8031 x56442</td>
                <td>hildegard.org</td>
                <td>Romaguera-Crona</td>
                <td><button type="button" class="info">INFO</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ervin Howell</td>
                <td>010-692-6593 x09125</td>
                <td>anastasia.net</td>
                <td>Deckow-Crist</td>
                <td><button type="button" class="pending">PENDING</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Clementine Bauch</td>
                <td>1-463-123-4447</td>
                <td>ramiro.info</td>
                <td>Romaguera-Jacobson</td>
                <td><button type="button" class="danger">DANGER</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Patricia Lebsack</td>
                <td>493-170-9623 x156</td>
                <td>kale.biz</td>
                <td>Robel-Corkery</td>
                <td><button type="button" class="info">INFO</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Chelsey</td>
                <td>(254)954-1289</td>
                <td>demarco.info</td>
                <td>keebler LLC</td>
                <td><button type="button" class="info">INFO</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>Mrs. Dennis Schulist</td>
                <td>1-477-935-8478 x6430</td>
                <td>ola.org</td>
                <td>Considine-Lockman</td>
                <td><button type="button" class="info">INFO</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>7</td>
                <td>Kurtis Weissnat</td>
                <td>210.067.6132</td>
                <td>elvis.io</td>
                <td>Johns Group</td>
                <td><button type="button" class="pending">PENDING</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
            <tr>
                <td>8</td>
                <td>Nicholas Runolfsdottir V</td>
                <td>586.493.6943 x140</td>
                <td>jacynthe.com</td>
                <td>Albernathy Group</td>
                <td><button type="button" class="info">INFO</button></td>
                <td><a href="">
                    <i class="fa-solid fa-images"></i>
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
div{
    margin: 20px;
    background: #fff;
}

div tr{
    text-align: left;
}

.danger{
    padding: 10px;
    width: 150px;
    border: none;
    border-radius: 5px;
    background: #EC454F;
    color: #fff;
}

.danger:hover{
    background: #ff0011;
}

.pending{
    padding: 10px;
    width: 150px;
    border: none;
    border-radius: 5px;
    background: #8B60ED;
    color: #fff;
}

.pending:hover{
    background: #4e02ff;
}

.info{
    padding: 10px;
    width: 150px;
    border: none;
    border-radius: 5px;
    background: #FFC73C;
    color: #fff;
}

.info:hover{
    background: #ffb700;
}

i{
    margin: 20px;
    color: black;
}

i:hover{
    color: #999999;
}
</style>