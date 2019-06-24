<template>
  <div class="multiple-search-03">
    <div class="top m-t-50">
      <span class="top-text co-fl">多语检索</span>
      <button type="primary" class="top-btn co-fr">返回写作</button>
    </div>
    <search-wrapper></search-wrapper>
    <div class="result-box p-lr-20 m-t-50">
      <div class="sort p-lr-20 h-40 co-flex bdt-1 bdb-1 co-ac">
        <div class="h-40 sort-left" style="flex: 1">
          <span>排序:</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <a type="primary"><i class="el-icon-edit"></i>相关度</a>
          <a type="primary"><i class="el-icon-share"></i>发表时间</a>
          <a type="primary"><i class="el-icon-delete">被引</i></a>
          <a type="primary"><i class="el-icon-delete">下载</i></a>
        </div>
        <div class="h-40 co-flex" style="flex: 1">
          <div class="sort-left" style="flex: 1">
            <span class="p-l-30">中文文献</span>
            <span>英文文献</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <a type="primary"><i class="el-icon-delete"></i>列表</a>
            <a type="primary"><i class="el-icon-delete"></i>摘要</a>
          </div>
          <p class="sort-right w-150 h-20 p-t-20">
            <span>每页显示:</span>
            <span>10</span>
            <span class="c-red">20</span>
            <span>50</span>
          </p>
        </div>
      </div>
      <div class="result-box h-40 bdb-1  co-flex co-ac">
        <div class="seek-left co-flex co-ac " style="flex: 1">
          <span class="m-l-20"><b>已选文献:</b></span>
          <span class="p-lr-10"><b>0</b></span>
          <span class="p-lr-10">清除</span>
          <div class="m-l-20 co-flex">
            <a class="" type="primary"><i class="el-icon-download"></i>批量下载</a>
            <a class="">导出/参考文献</a>
          </div>

        </div>
        <div class="seek-right" style="flex: 1">
          <div class="co-fr">
            <span class="">找到62,779&nbsp;&nbsp;结果</span>
            <span class="p-l-30">1/300</span>
            <i class="el-icon-arrow-right" style="border: 1px solid #000"></i>
          </div>

        </div>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        tooltip-effect="light"
        border
        stripe>
        <el-table-column
          type="selection"
          width="40">
        </el-table-column>
        <el-table-column
          prop="title"
          label="题名"
          width="300"
          align="center">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="120">
        </el-table-column>
        <el-table-column
          prop="publishTime"
          label="发表时间"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="dataBase"
          label="数据库">
        </el-table-column>
        <el-table-column
          prop="quoted"
          label="被引">
        </el-table-column>
        <el-table-column label="下载" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.isDownLoad"><i class="el-icon-download"></i>下载</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="阅读" align="center">
          <template slot-scope="scope">
            <el-tag><i class="el-icon-reading"></i>阅读</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="收藏" align="center" min-width="120px">
          <template slot-scope="scope">
            <el-tag>
              <i class="el-icon-star-off"></i>
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>
<script>
  import SearchWrapper from '@/base/SearchBox'
  export default {
    name: 'multiple-search-01',
    components: {
      SearchWrapper
    },
    data () {
      return {
        tableData: [
          {
            title: '国防在每个人心里',
            author: '何浩;葛腾飞',
            source: '情报杂志',
            publishTime: '2019-06-19 11:52',
            dataBase: '期刊',
            quoted: '200333',
            isDownLoad: true,
            readType: 1,
            isCollected: false
          },
          {
            title: 'ill be unveiled tonight in a live ceremony from Trafalgar Square.\n' +
              'Over at the brand new Aquatics Centre, Britain\'s star diver Tom Daley is going to perform an official launch dive into the Olympic pool.\n' +
              'With this building, the organisers have attempted to give London a landmark to rival Beijing\'s Water Cube from 2008.\n' +
              'It was designed by the prestigious architect Zaha Hadid and has a wave-like roof that is 160 metres long',
            author: '何浩;葛腾飞',
            source: '情报杂志',
            publishTime: '2019-06-19 11:52',
            dataBase: '期刊',
            quoted: '200333',
            isDownLoad: false,
            readType: 2,
            isCollected: true
          },
          {
            title: '国防在每个人心里',
            author: '何浩;葛腾飞',
            source: '情报杂志',
            publishTime: '2019-06-19 11:52',
            dataBase: '期刊',
            quoted: '200333',
            isDownLoad: true,
            readType: 1,
            isCollected: false
          }
        ]
      }
    },
    methods: {}
  }
</script>
<style lang="less" scoped>
  .multiple-search-03 {
    .top {
      padding: 0 20px;
      height: 50px;
      .top-text {
        line-height: 50px;
        font-size: 20px;
        color: #333333;
      }
      .top-btn {
        margin: 10px 0;
        width: 120px;
        text-align: center;
        height: 30px;
        font-size: 20px;
        background-color: rgb(72, 183, 235);
        color: #ffffff;
        border-radius: 8px;
      }
    }
    .result-box {
      font-size: 14px;
      font-weight: 400;
      .sort {
        .sort-left {
          a {
            width: 120px;
            height: 20px;
            border: 1px solid #000;
          }
        }
        .sort-right {
          span:hover {
            color: #f05555;
          }
        }
      }
      .seek-left {
        a {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          border: 1px solid #cfcfcf;
          background-color: #fff;
        }
        .seek-right {

        }
      }
    }
  }
</style>
