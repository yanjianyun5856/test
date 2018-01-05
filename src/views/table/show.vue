 <template>
  <div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  
  </el-breadcrumb>
   <el-button @click="handleAdd()" >添加</el-button>
    <el-table :data="list"  border style="width: 100%">
      <el-table-column prop="date" label="日期"
               :formatter="dateFormat"  width="180">
      </el-table-column>
      <el-table-column  prop="name"  label="姓名"  width="180">
      </el-table-column>
      <el-table-column  prop="address" label="地址" :formatter="addressTo" >
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope" >
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)" >
            编辑
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)" >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      small
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="50">
    </el-pagination>

<el-dialog :title="dialogTitle" :visible.sync="listItemForm" >
  <el-form :model="form"  >
    <el-form-item label="姓名:" :label-width="formLabelWidth" >
      <el-input v-model="form.name" style="width:200px;"  ></el-input>
    </el-form-item>
    <el-form-item label="日期:" :label-width="formLabelWidth" >
      <el-date-picker
        v-model="form.date"
        type="date">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="地址:" :label-width="formLabelWidth" >
      <el-input v-model="form.address"></el-input> 
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="listItemForm = false">取 消</el-button>
    <el-button type="primary" @click="updateDataSubmit()">确 定</el-button>
  </div>
</el-dialog>

  </div>  
  </template>

  <script>

    import { getList,updateData,deleteData } from '@/api/table'
    import {formatDate} from '../../utils/date.js' 

    export default {
      methods: {
        handleCurrentChange(val) {
          console.log('当前页:  '+val);
        },
        fetchData() {  //查询数据
          getList(111).then(response => {
          this.list = response.data;
          })
        },
        updateDataSubmit(){  //添加
          var userStr=JSON.stringify(this.form)
          console.log('提交的数据' + userStr);
           
          updateData(this.form).then(response => {
             this.listItemForm = false;
             this.fetchData() ;
          })
        },
        handleDelete(index,row){  //删除
          console.log(index,row.name);
          deleteData({"userName":row.name}).then(response => {
            this.fetchData() ;
          })
        },
        handleEdit(index,row){
          console.log(index,row.date,row.name);
          this.form = row 
          
          this.dialogTitle="编辑";
          this.listItemForm = true;
        },
        dateFormat:function(row, column){
         var date = row[column.property]; 
         let d  = new Date(date);
         return formatDate(d,'yyyy-MM-dd');
        },
        addressTo:function(row, column){
          let address = row[column.property]; 
          let s;
          if(address == "1"){
            s="北京";
          }else{
            s="其他";
          }
         return s;
        },
        handleAdd(){
          this.form.name= "";
          this.form.date= "";
          this.form.address= "";
          this.dialogTitle="添加";
          this.listItemForm = true;
        }
      },
      created() { //创建时
        this.fetchData()
      },
      data() {
        return {
          list: null,
          listItemForm:false,
          form: {
            name:'',
            date:'',
            address:''
          },
          formLabelWidth: '80px',
          dialogTitle:''
        }
      }
    }
  </script>
  