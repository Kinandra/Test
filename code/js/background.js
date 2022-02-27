class Class {
  constructor(id, name, session, time, type, point, left, capacity, favor) {
    this.id = id; //课程代码
    this.name = name; //名称
    this.session = session; //上课周数
    this.time = time; //上课时间
    this.type = type; //核心 or 一般 or 体育
    this.point = point; //学分
    this.left = left; //剩余人数
    this.capacity = capacity; //容量人数
    this.favor = favor; //喜爱程度
  }
}

class Scheme {
  constructor(course, valid, schedule, pressure, favor) {
    this.course = course; //课程数组
    this.valid = valid; //是否有效
    this.pressurre = pressure; //课程压力
    this.favor = favor; //偏好
    //选中概率
    this.rate = 1;
    for (var i = 0; i < course.length; i++) {
      var tmp = (course[i].capacity - course[i].left) / course[i].capacity;
      if (tmp > 1) tmp = 1;
      this.rate = this.rate * tmp;
    }
  }
  //检查valid合法性的函数
}

var SchemeList; //方案列表

function SubmitScheme(tmpScheme) {
  SchemeList.push(tmpScheme);

  chrome.storage.sync.set({ SchemeList }, function () {
    console.log("Value is set");
  });
}
