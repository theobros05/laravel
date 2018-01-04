@extends('layouts.app')
@section('content')
{{ HTML::script('js/StudentHistory.js') }}
<script>
    var datetime = '@php echo date("Ymdhis") @endphp';
</script>
<style type="text/css">
/*  Define the background color for all the EVEN background rows  */
.m-w{min-width: 1000px;}
.linkcolor {
    color: blue;
}
.unlinkcolor {
    color: gray;
}
.performanceContent_bgcolor {
    background-color:#b2b2b2;
}
.CMN_div_center {
    text-align: center;
}
.inb{
    display: inline-block;
}
.innerCnt_padding {
    padding: 5px 0px 5px 0px;
}
.fs10 {
  font-size: 10pt;
}
.container{
        padding-top:2px;
        margin: auto;
}
.fieldset1 { 
    border: solid 1px #008B8B;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    margin-top: 30px;
    width:99.7%;
}
.fieldset2 { 
    border: solid 1px #008B8B;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    background-color: #DDF1FA;
    width: 99.7%;
}
@media (min-width: 800px) {
    .m-w {
    min-width: 800px;
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>
<div class="container m-w">
    <div class="heading hline">
        <img class="headimg pull-left mt5" 
            src="{{ URL::asset('images/studentHistoryIcon.png') }}">
        <span class="fntweight ml5">{{ trans('messages.lbl_studenthistory') }}·</span> 
        <span class="fntweightnext">{{ trans('messages.lbl_view') }}</span>
        <a href="javascript:back();" class="pull-right mt16">
            <i class="fa fa-arrow-left"> {{ trans('messages.lbl_back') }}</i>
        </a>
    </div>
    <div class="row">
        {{ Form::open(array('name'=>'studenthistoryclassfrm', 'id'=>'studenthistoryclassfrm', 
                            'class' => 'form-horizontal',
                            'files'=>true,
                            'url' => 'StudentHistory/class?time='.date('YmdHis'),
                            'method' => 'POST')) }}
        {{ csrf_field() }}
        @php $username = Session::get('firstName'); @endphp
        <div class="col-xs-12 pm0 mt8 mb10 ml14">
            <div class="pull-left fbold">
                <span>{{ trans('messages.lbl_student') }} : </span>
            </div>
            <div class="pull-left ml10 fbold">
                <span>{{ $username }}</span>
            </div>
            <div class="pull-right mr30">
                <a href="#" onclick="return underconstr();"><img class="headimg " 
            src="{{ URL::asset('images/pdf_red.png') }}"></a>
            </div>
            
        </div>
        <div class="col-xs-12 pm0 mt8 mb10 ml14 m-w">
            <div class="pull-right mt8 mr30">
            <div class="pull-left fbold">
                <span>{{ trans('messages.lbl_type') }} : </span>
            </div>&nbsp;
                <a href="#" class="unlinkcolor">
                    {{ trans('messages.lbl_studenthistory') }}
                </a><span class="">|</span>
                <!-- class history -->
                <a href ="javascript:fnClassView('class')" class="linkcolor">
                    {{ trans('messages.lbl_class') }}
                </a><span class="">|</span>
                <a href ="javascript:underconstr()" class="linkcolor" 
                    style="">
                    {{ trans('messages.lbl_practice') }}
                </a><span class="">|</span>
                <a href ="javascript:underconstr()" class="linkcolor" 
                    style="">
                    {{ trans('messages.lbl_essaywriting') }}
                </a><span class="">|</span>
                <a href ="javascript:underconstr()" class="linkcolor" 
                    style="">
                    {{ trans('messages.lbl_weeklyreport') }}
                </a><span class="">|</span>
                <a href ="javascript:underconstr()" class="linkcolor" 
                    style="">
                    {{ trans('messages.lbl_time') }}
                </a><span class="">|</span>
                <a href ="javascript:underconstr()" class="linkcolor" 
                    style="">
                    {{ trans('messages.lbl_Intention') }}
                </a><span class="">|</span>
                <a href ="javascript:underconstr()" class="linkcolor" 
                    style="">
                    {{ trans('messages.lbl_chat') }}
                </a>
            </div>
        </div>
        </div>
<?php  
 print_r($detailHistory ); 
?>
@php if (count($getUsedBookDetails>0)) {
        $index=0;
            foreach ($getUsedBookDetails as $key => $value) {
                $index++;
 @endphp
        <div class="m-w">
            <div>
                <label class="lblcolor">{{ trans('messages.lbl_bookname') }} :</label>
                <label><span style="color:#{{$getUsedBookDetails[$key]['colorCode']}}">{{$getUsedBookDetails[$key]["levelName"]}}</span> - {{ $getUsedBookDetails[$key]["bookName"] }}</label>
            </div>
            <div>
                <label class="lblcolor">{{ trans('messages.lbl_totalhrs') }} :</label>
                <label>{{ $detailHistory[$key]['totalMins'] }}</label>
                <label class="lblcolor pl25">{{ trans('messages.lbl_ClassCount') }} :</label>
                <label>{{ $detailHistory[$key]['classCount'] }}</label>
                <label class="lblcolor pl25">{{ trans('messages.lbl_CurrentMonth') }} :</label>
                <label>{{ $detailHistory[$key]['currentMonthUse'] }}</label>
                <label class="lblcolor pl25">{{ trans('messages.lbl_lastclasson') }} :</label>
                <label>{{$getUsedBookDetails[$key]["lastClassDate"]}}</label>
            </div>
            <?php 
                $lessonCount = count($detailHistory[$key]['lessons']);
                $divisionCount = count($detailHistory[$key]['division']);
                if($lessonCount == 0) {
                    echo "<div class='mt5'><label class='CMN_color_red'>".$nolessonFound."</label></div>";
                } else if($divisionCount == 0) {
                    echo "<div class='mt5'><label class='CMN_color_red'>".$nodivisionFound."</label></div>";
                } else if($divisionCount > 0 && $lessonCount > 0 ) {?>
            <table class="table table-bordered width">
                <thead>
                <colgroup>  
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                </colgroup> 
                    <tr class="CMN_tbltheadcolor">
                        <th class="tac vam fstyl">{{ trans('messages.lbl_sno') }}</th>
                        @php foreach ($detailHistory[$key]['division'] as $dkey => $dvalue) {@endphp
                        <th class="tac vam fstyl">{{$dvalue->divisionName}}</th>
                        <?php }?>
                     </tr>   
                </thead>
                <tbody>
                    @php foreach ($detailHistory[$key]['lessons'] as $lkey => $lvalue) {@endphp
                  <tr>
                      <td>{{$lvalue->levelName}}</td>
                      @php 
                        foreach ($detailHistory[$key]['division'] as $dkey => $dvalue) {
                            if($detailHistory[$key]['status'][$lkey][$dkey] > 0) {@endphp
                            <td class=""><div><label>check</label></div></td>
                                @php } else {@endphp
                                    <td class="" align="center"><div><label>check</label></div>
                            </td>
                                        @php 
                            }
                        }@endphp
                  </tr>
                </tbody>
                @php }@endphp
            </table>
            @php }@endphp
        </div>
                        @php if(count($getUsedBookDetails) > $index) { @endphp
                            <hr class="" style="border: 1px dotted #ccc;"/>
                        @php }@endphp
        @php  }}else {@endphp
            <div class="">{{ trans('messages.lbl_norecord') }}</div>
                @php } @endphp
            </div>
       
        {{ Form::close() }}
    </div>
</div>
@endsection