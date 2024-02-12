export type LectureOptions =
  | 'modifiedDate'
  | 'lectureSatisfactionAvg'
  | 'lectureHoneyAvg'
  | 'lectureLearningAvg'
  | 'lectureTotalAvg';

export interface LectureCard {
  id: number; // Auto Increment
  semesterList: string; // 강의년도 + 학기 (ex) "2021-1,2022-1" )
  professor: string; // 교수이름
  majorType: string; // 개설학과
  lectureType: string; // 이수구분
  lectureName: string; // 강의이름
  lectureTotalAvg: number; // 강의 평가 평균 지수 (평균값)
  lectureSatisfactionAvg: number; // 강의 평가 만족도 지수 (평균값)
  lectureHoneyAvg: number; // 강의 평가 꿀강 지수 (평균값)
  lectureLearningAvg: number; // 강의 평가 배움 지수 (평균값)
}

export interface MainLectureResponse {
  count: number;
  data: LectureCard[];
}

export interface LectureDetailResponse {
  data: {
    id: number;
    lectureDifficultyAvg: number;
    lectureHomeworkAvg: number;
    lectureHoneyAvg: number;
    lectureLearningAvg: number;
    lectureName: string;
    lectureSatisfactionAvg: number;
    lectureTeamAvg: number;
    lectureTotalAvg: number;
    lectureType: string;
    majorType: string;
    professor: string;
    semesterList: string;
  };
  message: string;
  statusCode: number;
}
