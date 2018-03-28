import { Bridge } from './bridge-manage';
import Student from '../types/Student';
import { Phrase } from '../types/Phrase';
import { Kana } from '../types/Kana';
import { Kotoba } from '../types/Kotoba';
import { Kanji } from '../types/Kanji';
import { Lesson } from '../types/Lesson';

export interface FileBridge extends Bridge {
  // Here you would mirror your C# interface
  getDesktopFiles(): Promise<string[]>;
}

export interface DialogBridge extends Bridge {
  // Here you would mirror your C# interface
  showDialog(title: string, msg: string, showCancel: boolean): Promise<string>;
}

export interface TimeBridge extends Bridge {}

export interface StudentBridge extends Bridge {
  getAllStudent(): Promise<Student[]>;
}

export interface PhraseBridge extends Bridge {
  getPhrasesByCatID(id: number): Promise<Phrase[]>;
}

export interface KanaBridge extends Bridge {
  getKana(): Promise<Kana[]>;
}

export interface KotobaBridge extends Bridge {
  getKotoba(id: number): Promise<Kotoba[]>;
}

export interface KanjiBridge extends Bridge {
  getKanjiesById(id: number): Promise<Kanji[]>;
  getKanjiesByScope(from: number, to: number): Promise<Kanji[]>;
}

export interface AudioBridge extends Bridge {
  playAudio(url: string): Promise<any>;
}

export interface LessonBridge extends Bridge {
  getListenLesson(id: number): Promise<Lesson>;
}
